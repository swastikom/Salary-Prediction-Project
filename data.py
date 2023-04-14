import pymongo
import json
import pandas as pd

def remove_id(obj):
    if isinstance(obj, list):
        return [remove_id(item) for item in obj]
    elif isinstance(obj, dict):
        return {key: remove_id(value) for key, value in obj.items() if key != '_id'}
    else:
        return obj

def get_data():
    client = pymongo.MongoClient("mongodb+srv://salary_data_cluster_11401:TXxUcL2fGSRcifw5@salarydatacluster.scpzbio.mongodb.net/test?retryWrites=true&w=majority")

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
    get_data()