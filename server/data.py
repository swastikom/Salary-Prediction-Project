import pymongo
import pandas as pd
import os
from dotenv import load_dotenv
import requests
import json

def remove_id(obj):
    if isinstance(obj, list):
        return [remove_id(item) for item in obj]
    elif isinstance(obj, dict):
        return {key: remove_id(value) for key, value in obj.items() if key != '_id'}
    else:
        return obj

def get_data():
    load_dotenv()  # Load environment variables from .env file

    DB_NAME = os.getenv('DB_NAME')
    API_KEY = os.getenv('API_KEY')
    
    url = "https://ap-south-1.aws.data.mongodb-api.com/app/data-rpnzq/endpoint/data/v1/action/find"
    payload = json.dumps({
        "collection": "salary_data_coll",
        "database": DB_NAME,
        "dataSource": "SalaryDataCluster",
        "projection": {},
        "sort": {},
    })
    
    headers = {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': API_KEY, 
    }
    
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)
    
    if response.status_code == 200:
        data = response.json()
        df = pd.DataFrame(remove_id(data))
        return df
    else:
        return "Failed to fetch data from API"
    
    df.to_csv('data.csv', index=False)

    # Print the DataFrame
    # print(df)
    
    return df
        
if __name__ == '__main__':
    print(get_data())