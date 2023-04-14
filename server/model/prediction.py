import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score 
from sklearn.preprocessing import LabelEncoder
from .data import get_data



def predict_salary(Location,JobRole,Experience,Degree):
    # data = pd.read_csv(r'Main_Dataset.csv')

    try:
        data = get_data()
    except:
        return "Dataset not available"
    
    print(data.shape)
    # input_data = pd.read_csv(r'sample_test_data.csv') 

    location_encoder = LabelEncoder()
    job_role_encoder = LabelEncoder()
    degree_encoder = LabelEncoder()

    location_encoder.fit(data['Location'])
    job_role_encoder.fit(data['Job Role'])
    degree_encoder.fit(data['Degree'])
    
    input_data = pd.DataFrame(columns=['Location', 'Job Role', 'Experience (Years)', 'Degree'])
    input_data['Location'] = location_encoder.transform([Location])
    input_data['Job Role'] = job_role_encoder.transform([JobRole])
    input_data['Degree'] = degree_encoder.transform([Degree])
    input_data['Experience (Years)'] = Experience

    data['Location'] = location_encoder.transform(data['Location'])
    data['Job Role'] = job_role_encoder.transform(data['Job Role'])
    data['Degree'] = degree_encoder.transform(data['Degree'])

    X = data[['Location', 'Job Role', 'Experience (Years)', 'Degree']]
    y = data['Salary']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
    rfrg = RandomForestRegressor(n_estimators=100,random_state=1)

    rfrg.fit(X_train,y_train)
    y_pred = rfrg.predict(X_test)
    mean_squared_error(y_test,y_pred)
    score = r2_score(y_test, y_pred)
    score = score * 100
    # int(score)

    prediction_with_input_data = rfrg.predict(input_data)
    return(int(prediction_with_input_data))

if __name__ == '__main__':
    # query = input('Enter the following details to predict your salary:')
    Location = input('Enter the Location: ')
    JobRole = input('Enter the Job Role: ')
    Experience = input('Enter the Experience (Years): ')
    Degree = input('Enter the Degree: ')
    print("Expected Salary: ", predict_salary(Location,JobRole,Experience,Degree))