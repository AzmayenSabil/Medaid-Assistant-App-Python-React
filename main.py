# Import the necessary libraries
import pyttsx3
import speech_recognition as sr
#portaudio

# Define a list of medical domains
medical_domains = [
    "Cardiology",
    "Pulmonology"
    # "Endocrinology",
    # "Gastroenterology",
    # "Neurology",
    # "Psychiatry"
]

# Define a dictionary of questions for each medical domain
medical_questions = {
    "Cardiology": [
        "Have you ever been diagnosed with any heart conditions, such as coronary artery disease, heart failure, or arrhythmias?",
        "Have you ever had a heart attack or stroke?",
        "Do you have a family history of heart disease?",
        "Do you smoke or use tobacco products?",
        "Do you have high blood pressure or high cholesterol?",
        "Do you exercise regularly?",
        "Are you currently taking any medications for heart-related conditions?"
    ],
    "Pulmonology": [
        "Have you ever been diagnosed with any lung conditions, such as asthma, chronic bronchitis, or emphysema?",
        "Do you have a history of smoking or exposure to secondhand smoke?",
        "Do you have a persistent cough, shortness of breath, or wheezing?",
        "Have you ever been hospitalized for a respiratory condition?",
        "Are you currently taking any medications for respiratory-related conditions?"
    ],
    # "Endocrinology": [
    #     "Have you ever been diagnosed with any endocrine disorders, such as diabetes, thyroid disease, or adrenal insufficiency?",
    #     "Do you have a family history of endocrine disorders?",
    #     "Have you experienced unexplained weight loss or gain?",
    #     "Do you experience fatigue, weakness, or changes in appetite?",
    #     "Are you currently taking any medications for endocrine-related conditions?"
    # ],
    # "Gastroenterology": [
    #     "Have you ever been diagnosed with any gastrointestinal disorders, such as acid reflux, irritable bowel syndrome, or inflammatory bowel disease?",
    #     "Do you have a family history of gastrointestinal disorders?",
    #     "Do you experience abdominal pain, bloating, or diarrhea?",
    #     "Have you experienced any recent changes in bowel movements or stool consistency?",
    #     "Are you currently taking any medications for gastrointestinal-related conditions?"
    # ],
    # "Neurology": [
    #     "Have you ever been diagnosed with any neurological conditions, such as epilepsy, Parkinson's disease, or multiple sclerosis?",
    #     "Do you have a family history of neurological disorders?",
    #     "Do you experience headaches, dizziness, or tremors?",
    #     "Have you experienced any changes in vision, hearing, or speech?",
    #     "Are you currently taking any medications for neurological-related conditions?"
    # ],
    # "Psychiatry": [
    #     "Have you ever been diagnosed with any psychiatric conditions, such as depression, anxiety, or bipolar disorder?",
    #     "Do you have a family history of psychiatric disorders?",
    #     "Do you experience changes in mood, sleep, or appetite?",
    #     "Have you experienced any recent traumatic events or significant life changes?",
    #     "Are you currently taking any medications for psychiatric-related conditions?"
    # ]
}

# Define a list to store the answers
answers = []

# Initialize the pyttsx3 engine
engine = pyttsx3.init()

# Define a function to speak a given text
def speak(text):
    engine.say(text)
    engine.runAndWait()

# Define a function to convert speech to text
def listen():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        audio = r.listen(source)
    try:
        text = r.recognize_google(audio)
        return text
    except:
        speak("Sorry, I didn't catch that. Could you please repeat your answer?")
        return listen()

# Ask the user to select a medical domain
speak("Please select a medical domain from the following options:")
for i, domain in enumerate(medical_domains):
    speak(f"{i+1}. {domain}")
domain_choice = input("Your choice: ")

# Check if the user's choice is valid
while not domain_choice.isdigit() or int(domain_choice) < 1 or int(domain_choice) > len(medical_domains):
    speak("Sorry, that's not a valid choice. Please select a medical domain from the following options:")
    for i, domain in enumerate(medical_domains):
        speak(f"{i+1}. {domain}")
    domain_choice = input("Your choice: ")
domain_choice = int(domain_choice)

# Get the selected medical domain
domain = medical_domains[domain_choice-1]

# Ask the questions for the selected medical domain
speak(f"Please answer the following questions related to {domain}:")
for question in medical_questions[domain]:
    speak(question)
    answer = listen()
    answers.append(answer)

# Print the answers
print("Here are your answers:")
for i, answer in enumerate(answers):
    print(f"{i+1}. {answer}")

