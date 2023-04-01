# import json
# from getDomain import get_domain
#
# # function to add to JSON
# def write_json(new_data, filename='results.json'):
#     with open(filename, 'r+') as file:
#         # First we load existing data into a dict.
#         file_data = json.load(file)
#         # Join new_data with file_data inside emp_details
#         file_data["patient_details"].append(new_data)
#         # Sets file's current position at offset.
#         file.seek(0)
#         # convert back to json.
#         json.dump(file_data, file, indent=4)
#
#
# # Load the question sets from a JSON file
# with open('questions.json') as f:
#     questions = json.load(f)
#
# # Define the domains
# domains = {
#     'heart': 'cardiology',
#     'stomach': 'gastroenterology',
#     'skin': 'dermatology'
# }
#
# # Collect user information
# user_info = {}
# user_info['age'] = input('What is your age? ')
# user_info['gender'] = input('What is your gender? ')
# user_info['medical_history'] = input('Do you have any medical history? ')
#
# # Collect multiple chief complaints
# chief_complaints = []
# while True:
#     complaint = input('What is your chief complaint? (type "done" when finished)')
#     if complaint.lower() == 'done':
#         break
#     chief_complaints.append(complaint)
#
# # Determine which domain to use based on the user's chosen keywords
# domain = get_domain(chief_complaints)
#
# if domain is None:
#     print('Sorry, we do not have any questions related to your chief complaint.')
# else:
#     # Use the corresponding question set for the selected domain
#     question_set = questions[domain]
#
#     # Ask the questions and store the user's responses
#     responses = {}
#     for question in question_set:
#         answer = input(question)
#         responses[question] = answer
#
#     result = {'user_info': user_info, 'responses': responses}
#     write_json(result)
#
#
# ####
#
#


import json
import tkinter as tk
from tkinter import simpledialog
from getDomain import get_domain

# Load the question sets from a JSON file
with open('questions.json') as f:
    questions = json.load(f)

# Define the domains
domains = {
    'heart': 'cardiology',
    'stomach': 'gastroenterology',
    'skin': 'dermatology'
}

# function to add to JSON
def write_json(new_data, filename='results.json'):
    with open(filename, 'r+') as file:
        # First we load existing data into a dict.
        file_data = json.load(file)
        # Join new_data with file_data inside emp_details
        file_data["patient_details"].append(new_data)
        # Sets file's current position at offset.
        file.seek(0)
        # convert back to json.
        json.dump(file_data, file, indent=4)

# function to ask questions and store responses
def ask_questions(question_set):
    responses = {}
    for question in question_set:
        response = tk.simpledialog.askstring("Question", question, parent=window)
        if response is None:
            break
        responses[question] = response
    return responses

# function to determine domain based on chief complaints
def determine_domain(chief_complaints):
    domain = get_domain(chief_complaints)
    if domain is None:
        tk.messagebox.showerror("Error", "Sorry, we do not have any questions related to your chief complaint.")
        return None
    else:
        return domain

# function to collect user information and chief complaints
def collect_user_info_and_complaints():
    user_info = {}
    user_info['age'] = tk.simpledialog.askstring("Age", "What is your age?", parent=window)
    user_info['gender'] = tk.simpledialog.askstring("Gender", "What is your gender?", parent=window)
    user_info['medical_history'] = tk.simpledialog.askstring("Medical History", "Do you have any medical history?", parent=window)

    chief_complaints = []
    while True:
        complaint = tk.simpledialog.askstring("Chief Complaint", "What is your chief complaint? (type 'done' when finished)", parent=window)
        if complaint is None:
            break
        if complaint.lower() == 'done':
            break
        chief_complaints.append(complaint)

    domain = determine_domain(chief_complaints)
    if domain is not None:
        question_set = questions[domain]
        responses = ask_questions(question_set)
        result = {'user_info': user_info, 'responses': responses}
        write_json(result)

# create a tkinter window
window = tk.Tk()
window.geometry("300x300")
window.title("Patient Data Collection")

# create a button to initiate data collection
button = tk.Button(text="Start Data Collection", command=collect_user_info_and_complaints)
button.pack(pady=20)

window.mainloop()
