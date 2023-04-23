import json
from getDomain import get_domain

# Load the question sets from a JSON file
with open('questions.json') as f:
    questions = json.load(f)


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
def ask_questions(complaint, domain):
    responses = {}
    question_set = questions[domain]
    for question in question_set:
        response = input(question + "\n")
        if response.strip() == '':
            break
        responses[question] = response
    return responses


# function to determine domain based on chief complaints
def determine_domain(chief_complaints, responses, domain):
    if domain is not None:
        return domain
    new_domain = get_domain(chief_complaints + list(responses.values()))
    if new_domain is None:
        print("Sorry, we do not have any questions related to your chief complaint.")
        return None
    else:
        return new_domain


# function to collect user information and complaints
def collect_user_info_and_complaints():
    user_info = {}
    user_info['age'] = input("What is your age?\n")
    user_info['gender'] = input("What is your gender?\n")
    user_info['medical_history'] = input("Do you have any medical history?\n")

    chief_complaints = []

    while True:
        complaint = input("Enter your chief complaint (press Enter to finish):\n")
        if complaint.strip() == '':
            break
        chief_complaints.append(complaint)
        domain = determine_domain(chief_complaints, {}, None)
        if domain is not None:
            responses = ask_questions(complaint, domain)
            result = {'user_info': user_info, 'chief_complaint': complaint, 'responses': responses, 'domain': domain}
            write_json(result)
            print("Your information has been saved.")
        else:
            print("Sorry, we do not have any questions related to your chief complaint.")

    if chief_complaints:
        print("Thank you for providing your information.")
        print("Please answer the following questions to help us improve our system.")
        feedback = input("Was the data collection process easy to understand and complete? (yes/no)\n")
        if feedback.lower() == 'yes':
            print("We're glad to hear that. Thank you for your feedback!")
        else:
            print("We're sorry to hear that. Please let us know how we can improve the process.")
    else:
        print("Please enter at least one chief complaint.")


def clear_screen():
    print("\n" * 8)


def main():
    while True:
        print("\nWelcome to Patient Data Collection!")
        print("Please choose an option:")
        print("1. Start Data Collection")
        print("2. Exit")
        choice = input()
        if choice == '1':
            clear_screen()
            collect_user_info_and_complaints()
        elif choice == '2':
            print("Thank you for using Patient Data Collection!")
            break
        else:
            print("Invalid choice, please try again.")


if __name__ == "__main__":
    main()
