import json
import tkinter as tk
from tkinter import simpledialog, messagebox
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
        clear_screen()

# function to ask questions and store responses
def ask_questions(question_set, chief_complaints):
    responses = {}
    domain = determine_domain(chief_complaints)
    if domain is None:
        return None
    for question in question_set:
        response = tk.simpledialog.askstring("Question", question, parent=window)
        if response is None:
            break
        responses[question] = response
        domain = determine_domain(chief_complaints + list(responses.values()))
        if domain is None:
            break
    return responses, domain


# function to determine domain based on chief complaints
def determine_domain(chief_complaints):
    domain = get_domain(chief_complaints)
    if domain is None:
        tk.messagebox.showerror("Error", "Sorry, we do not have any questions related to your chief complaint.")
        return None
    else:
        return domain


def collect_user_info_and_complaints():
    user_info = {}
    user_info['age'] = tk.simpledialog.askstring("Age", "What is your age?", parent=window)
    user_info['gender'] = tk.simpledialog.askstring("Gender", "What is your gender?", parent=window)
    user_info['medical_history'] = tk.simpledialog.askstring("Medical History", "Do you have any medical history?",
                                                             parent=window)

    chief_complaints = []

    def add_complaint():
        complaint = complaint_entry.get()
        if complaint != '':
            chief_complaints.append(complaint)
            complaint_entry.delete(0, tk.END)
            complaints_listbox.insert(tk.END, complaint)

    def submit_complaints():
        if chief_complaints:
            question_set = questions[determine_domain(chief_complaints)]
            responses, domain = ask_questions(question_set, chief_complaints)
            if domain is not None:
                result = {'user_info': user_info, 'chief_complaints': chief_complaints, 'responses': responses,
                          'domain': domain}
                write_json(result)
                tk.messagebox.showinfo("Success", "Your information has been saved.")
                # window.destroy()
        else:
            tk.messagebox.showerror("Error", "Please enter at least one chief complaint.")

    complaint_label = tk.Label(window, text="Enter your chief complaints:")
    complaint_entry = tk.Entry(window)
    add_button = tk.Button(window, text="Add", command=add_complaint)
    complaints_listbox = tk.Listbox(window, height=5)
    submit_button = tk.Button(window, text="Submit", command=submit_complaints)

    complaint_label.pack()
    complaint_entry.pack()
    add_button.pack()
    complaints_listbox.pack()
    submit_button.pack()


# create a tkinter window
window = tk.Tk()
window.geometry("500x500")
window.title("Patient Data Collection")

button = tk.Button(text="Start Data Collection", command=collect_user_info_and_complaints)
button.pack(pady=20)
def clear_screen():
    for widget in window.winfo_children():
        widget.destroy()
    button = tk.Button(text="Start Data Collection", command=collect_user_info_and_complaints)
    button.pack(pady=20)

window.mainloop()
