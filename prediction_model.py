# %%
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score 


# %%
data = pd.read_csv(r'Salary_Data.csv')
data

# %%
sample_data = pd.read_csv(r'sample_test_data.csv')
sample_data

# %%
dataMapping_location = {
    'Kolkata': 1,
    'Bangalore':2,
    'Pune':3
}

dataMapping_job_role = {
    'Data Analyst': 1,
    'Data Scientist': 2,
    'Java Engineer': 3,
}

dataMapping_degree = {
    "Bachelor's": 1,
    "Master's": 2,
    "PhD":3
}


# %%
sample_data['Location'] = sample_data['Location'].map(dataMapping_location)
sample_data['Job Role'] = sample_data['Job Role'].map(dataMapping_job_role)
sample_data['Degree'] = sample_data['Degree'].map(dataMapping_degree)
sample_data


# %%
data['Location'] = data['Location'].map(dataMapping_location)
data['Job Role'] = data['Job Role'].map(dataMapping_job_role)
data['Degree'] = data['Degree'].map(dataMapping_degree)
data


# %%
X = data[['Location', 'Job Role', 'Experience (Years)', 'Degree']]
y = data['Salary']

# %%
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
rfrg = RandomForestRegressor(n_estimators=100,random_state=1)
X_test


# %%
rfrg.fit(X_train,y_train)
y_pred = rfrg.predict(X_test)
mean_squared_error(y_test,y_pred)
score = r2_score(y_test, y_pred)
score


# %%
prediction_with_sample_data = rfrg.predict(sample_data)
prediction_with_sample_data


