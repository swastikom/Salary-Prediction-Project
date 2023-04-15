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
    # DB_USER = os.getenv('DB_USER')
    # DB_PASSWORD = os.getenv('DB_PASSWORD')
    # DB_HOST = os.getenv('DB_HOST')
    
    
    # client = pymongo.MongoClient(f"mongodb+srv://{DB_USER}:{DB_PASSWORD}@{DB_HOST}?retryWrites=true&w=majority")

    # db = client.salary_data
    # collection = db.salary_data_coll
    # data = collection.find()
    # df = pd.DataFrame(data)
    # df.drop('_id', axis=1, inplace=True)
    
    
    url = "https://ap-south-1.aws.data.mongodb-api.com/app/data-rpnzq/endpoint/data/v1/action/find"
    payload = json.dumps({
        "collection": "salary_data_coll",
        "database": DB_NAME,
        "dataSource": "SalaryDataCluster",
        "projection": {
            "id": 0,},
        "sort": {},
    })
    
    headers = {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': API_KEY, 
    }
    
    response = requests.request("POST", url, headers=headers, data=payload)
    
    if response.status_code == 200:
        data = response.json()
        df = pd.DataFrame(remove_id(data))
    #   df.drop('_id', axis=1, inplace=True)
        df.to_csv('data.csv', index=False)
        df = pd.read_csv('data.csv')

        # Create new columns from the dictionary values in the 'documents' column
        df[['Location', 'Job Role', 'Experience (Years)', 'Degree', 'Salary']] = df['documents'].apply(lambda x: pd.Series(eval(x)))

        # Drop the 'documents' column
        df.drop('documents', axis=1, inplace=True)

        # Save the reformatted CSV file
        df.to_csv('reformatted_data.csv', index=False)
        return df
    else:
        return "Failed to fetch data from API"
    
    # df.to_csv('data.csv', index=False)

    # Print the DataFrame
    # print(df)
    
    return df
        
if __name__ == '__main__':
    print(get_data())