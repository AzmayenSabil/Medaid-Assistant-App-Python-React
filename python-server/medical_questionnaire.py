from flask import Flask, request, jsonify
import json

app = Flask(__name__)


# Define a function to add CORS headers to responses
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'POST'
    return response


# Register the function as a "after_request" handler to apply CORS headers to all responses
app.after_request(add_cors_headers)

# Read the JSON data from the file
with open('questions.json', 'r') as json_file:
    data = json.load(json_file)

print("Loaded Data: ", data["specific_questions"][0])


@app.route('/get_questions', methods=['POST'])
def get_questions_route():
    request_data = request.get_json()
    chief_complaint = request_data.get('chief_complaint')
    matched_question_set = None

    if chief_complaint:
        for question_set in data["specific_questions"]:
            if question_set["symptom"] == chief_complaint:
                matched_question_set = question_set
                break

    if matched_question_set:
        questions = matched_question_set["questions"]
    else:
        questions = []
    print(questions)
    return jsonify({"questions": questions})


if __name__ == '__main__':
    app.run(debug=True)
