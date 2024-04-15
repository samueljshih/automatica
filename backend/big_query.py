from google.cloud import bigquery
import os

credentials = './credentials.json'

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = credentials

# Initialize BigQuery client
bq_client = bigquery.Client()

# Runs SQL queries
def query_bigquery(sql_query):
    query_job = bq_client.query(sql_query)
    results = query_job.result()
    return results