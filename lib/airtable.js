import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
)

const minifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record))
}

const minifyRecord = (record) => {
  return {
    Id: record.id,
    ...record.fields
  }
}

async function getTable(table) {
  const records = await base(table)
    .select({
      sort: [{ field: 'Created', direction: 'desc' }]
    })
    .all()
  const airtabledata = await minifiedRecords(records)

  return airtabledata.filter((o) => !o.Draft)
}

export { getTable }
