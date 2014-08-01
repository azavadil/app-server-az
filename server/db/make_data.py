import random
import json
import time
import csv


## fb_id | access_token | username | description | is_male | age | 

def make_url():
  alpha = 'abcdefghijklmnopqrstuvwxyz'
  random_size = random.randint(0,10)
  url = []
  for _ in range(random_size):
    random_letter_index = random.randint(0,len(alpha)-1)
    url.append(alpha[random_letter_index])
  return "".join(url)
  
def make_record():
  row_0 = { 'name': 'Account Managers', 'id':time.time(), 'url':'http://' + make_url() + '.png'}  
  row_1 = {'name':'Sales Reps','id':time.time(), 'url':'http://' + make_url() + '.png'}
  row_2 = {'name':'Vertical Leads', 'id':time.time(), 'url':'http://' + make_url() + '.png' }
  row_3 = { 'name': 'Founders', 'id':time.time(), 'url':'http://' + make_url() + '.png'}
  return json.dumps([row_0, row_1, row_2, row_3])

def create_data():

  with open("plans.txt", "a") as myfile:
    for i in range(100): 
      row = make_record()
      myfile.write(row + '\n')


create_data()

