import pandas as pd
import pymongo

import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_HOST = os.getenv('DB_HOST')

API_KEY = os.getenv('API_KEY')
API_SECRET = os.getenv('API_SECRET')

# Connect to MongoDB
client = pymongo.MongoClient(f"mongodb+srv://{DB_USER}:{DB_PASSWORD}@{DB_HOST}?retryWrites=true&w=majority")

db = client.salary_data
collection = db.salary_data_coll

def insert_data(datafile):
    # Load CSV data into DataFrame
    df = pd.read_csv(datafile)

    # Convert DataFrame to list of dictionaries
    data = df.to_dict(orient='records')

    # Insert data into MongoDB collection
    collection.insert_many(data)
    print("Data inserted successfully!")

def clear_data(collection_name):
    # Delete all documents from collection
    collection.delete_many({})
    print(f"All documents from {collection_name} collection have been deleted.")

if __name__ == '__main__':
    choice = input("Enter '1' to insert data or '2' to clear the database: ")
    
    if choice == '1':
        datafile = "dataset/" + input("Enter data file name to insert: ")
        insert_data(datafile)
    elif choice == '2':
        collection_name = collection.name
        clear_data(collection_name)
    else:
        print("Invalid choice. Please enter either '1' or '2'.")
