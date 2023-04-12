import pandas as pd
import numpy as np
import sys
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix,accuracy_score
from sklearn.ensemble import RandomForestClassifier


#Load data
df = pd.read_csv('mldata.csv')


#binary encoding for categorical data
cols = df[["self-learning capability?", "Extra-courses did","Taken inputs from seniors or elders", "worked in teams ever?", "Introvert"]]
for i in cols:
    cleanup_nums = {i: {"yes": 1, "no": 0}}
    df = df.replace(cleanup_nums)

#number encoding
mycol = df[["reading and writing skills", "memory capability score"]]
for i in mycol:
    cleanup_nums = {i: {"poor": 0, "medium": 1, "excellent": 2}}
    df = df.replace(cleanup_nums)

category_cols = df[['certifications', 'workshops', 'Interested subjects', 'interested career area ', 'Type of company want to settle in?', 
                    'Interested Type of Books']]
dic={}
for i in category_cols:
    df[i] = df[i].astype('category')
    df[i + "_code"] = df[i].cat.codes
    dic[i]=dict(enumerate(df[i].cat.categories))

#get dummy columns for last two columns
df = pd.get_dummies(df, columns=["Management or Technical", "hard/smart worker"], prefix=["A", "B"])

#new dataframe
feed = df[['Logical quotient rating', 'coding skills rating', 'hackathons', 'public speaking points', 'self-learning capability?','Extra-courses did', 
           'Taken inputs from seniors or elders', 'worked in teams ever?', 'Introvert', 'reading and writing skills', 'memory capability score',  
           'B_hard worker', 'B_smart worker', 'A_Management', 'A_Technical', 'Interested subjects_code', 'Interested Type of Books_code', 'certifications_code', 
           'workshops_code', 'Type of company want to settle in?_code',  'interested career area _code',
             'Suggested Job Role']]


# Taking all independent variable columns
df_train_x = feed.drop('Suggested Job Role',axis = 1)

# Target variable column
df_train_y = feed['Suggested Job Role']

x_train, x_test, y_train, y_test = train_test_split(df_train_x, df_train_y, test_size=0.20, random_state=42)

#randomforest classifier
rf = RandomForestClassifier(random_state = 10)
rf.fit(x_train, y_train)
rfc_y_pred = rf.predict(x_test)
rfc_cm = confusion_matrix(y_test,rfc_y_pred)
rfc_accuracy = accuracy_score(y_test,rfc_y_pred)
# print("accuracy=",rfc_accuracy*10)
# print("confusion matrics=",rfc_cm)

# print("hellllllllllo")

# Taking user data
data=sys.argv[1].split(",")
# print(data)

test_data=[]

test_data.append([data[0],data[1],data[2],data[3]])

#self learning and extra course
if(data[4]=='no'):
    test_data[0].append('0')
else:
    test_data[0].append('1')

if(data[5]=='no'):
    test_data[0].append('0')
else:
    test_data[0].append('1')        

category_cols = df[['certifications', 'workshops', 'Interested subjects', 'interested career area ', 'Type of company want to settle in?', 
                    'Interested Type of Books']]
                    
dict1=dic['certifications']
dict2=dic['workshops']
dict3=dic['Interested subjects']
dict4=dic['interested career area ']
dict5=dic['Type of company want to settle in?']
dict6=dic['Interested Type of Books'] 

key = list(filter(lambda x: dict1[x] == data[6], dict1))
test_data[0].append(str(key[0]))

key = list(filter(lambda x: dict2[x] == data[7], dict2))
test_data[0].append(str(key[0]))

# for reading and memory
x=data[8]
if x=='poor':
    test_data[0].append('0')
elif x=='medium':
    test_data[0].append('1')
else:
    test_data[0].append('2')   

x=data[9]
if x=='poor':
    test_data[0].append('0')
elif x=='medium':
    test_data[0].append('1')
else:
    test_data[0].append('2')


# for subjects, career and company
key = list(filter(lambda x: dict3[x] == data[10], dict3))
test_data[0].append(str(key[0]))


key = list(filter(lambda x: dict4[x] == data[11], dict4))
test_data[0].append(str(key[0]))


key = list(filter(lambda x: dict5[x] == data[12], dict5))
test_data[0].append(str(key[0]))


# for input from seniors
if data[13]=='no':
    test_data[0].append('0')
else:
    test_data[0].append('1')

#for books
key = list(filter(lambda x: dict6[x] == data[14], dict6))
test_data[0].append(str(key[0]))

# for management and hard work
# manage tech 
# hard smart

if data[15]=='Management':
    test_data[0].append('1')
    test_data[0].append('0')
else:
    test_data[0].append('0')
    test_data[0].append('1')    


if data[16]=='Hard worker':
    test_data[0].append('1')
    test_data[0].append('0')
else:
    test_data[0].append('0')
    test_data[0].append('1')    

#worked in team and introvert
if data[17]=='no':
    test_data[0].append('0')
else:
    test_data[0].append('1')

if data[18]=='no':
    test_data[0].append('0')
else:
    test_data[0].append('1')        

# print(test_data)
ans=rf.predict(test_data)
print(ans)        