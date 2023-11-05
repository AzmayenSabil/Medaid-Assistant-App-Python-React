# MedAid App - Doctor Assistant

MedAid is a medical app designed to assist doctors by gathering patient symptoms and relevant information, streamlining the communication process between patients and healthcare providers. This app aims to save time for both doctors and patients, enhancing the healthcare experience.

1. Clone the repository:

    ```bash
    git clone <repo-url>
    ```

## Frontend

### Prerequisites

- Node.js: Make sure you have Node.js installed on your system. You can download it [here](https://nodejs.org/).

### Getting Started


1. Navigate to the frontend directory:
    ```bash
    cd client
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

This will launch the MedAid frontend application on your local machine. You can access it in your web browser at `http://localhost:3000`.



## Server

### Prerequisites

- Python: Ensure you have Python 3.x installed on your system. You can download it here. [here](https://www.python.org/downloads/).

### Getting Started

1. Navigate to the server directory:
    ```bash
    cd server
    ```

2. Start the development server:
    ```bash
    python medical_questionnaire.py
    ```

The server should now be running on `http://localhost:5000`.



# Usage

1. Access the MedAid frontend in your web browser at http://localhost:3000.
2. Fill in patient relevant information and chief complaint .
3. Submit the data, which will be sent to the server for processing and return set of questions for the patient to answer.
4. Doctors will receive the patient's information, allowing them to assist the patient effectively.
