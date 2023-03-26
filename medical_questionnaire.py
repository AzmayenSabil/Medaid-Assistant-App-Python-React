import json

# Load the question sets from a JSON file
with open('questions.json') as f:
    questions = json.load(f)

# Define the domains
domains = {
    'heart': 'cardiology',
    'stomach': 'gastroenterology',
    'skin': 'dermatology'
}

# Collect user information
user_info = {}
user_info['age'] = input('What is your age? ')
user_info['gender'] = input('What is your gender? ')
user_info['medical_history'] = input('Do you have any medical history? ')
user_info['chief_complaint'] = input('What is your chief complaint? ')

# Determine which domain to use based on the user's chosen keyword
domain = None
for keyword in domains.keys():
    if keyword in user_info['chief_complaint']:
        domain = domains[keyword]
        break

if domain is None:
    print('Sorry, we do not have any questions related to your chief complaint.')
else:
    # Use the corresponding question set for the selected domain
    question_set = questions[domain]

    # Ask the questions and store the user's responses
    responses = {}
    for question in question_set:
        answer = input(question)
        responses[question] = answer

    # Store the results in a file
    with open('results.json', 'a') as f:
        result = {'user_info': user_info, 'responses': responses}
        json.dump(result, f)
