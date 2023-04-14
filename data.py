import pymongo
import json
import pandas as pd
import os
from dotenv import load_dotenv

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
    DB_USER = os.getenv('DB_USER')
    DB_PASSWORD = os.getenv('DB_PASSWORD')
    DB_HOST = os.getenv('DB_HOST')
    client = pymongo.MongoClient(f"mongodb+srv://{DB_USER}:{DB_PASSWORD}@{DB_HOST}?retryWrites=true&w=majority")

    db = client.salary_data
    collection = db.salary_data_coll
    data = collection.find()
    df = pd.DataFrame(data)
    df.drop('_id', axis=1, inplace=True)
    
    # df.to_csv('data.csv', index=False)

    # Print the DataFrame
    # print(df)
    
    return df
        
if __name__ == '__main__':
    print(get_data())