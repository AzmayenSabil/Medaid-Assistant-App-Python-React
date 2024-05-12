from flask import Flask, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline

app = Flask(__name__)

model_path = "preTrained_model"
# Import the pretrained model

model = AutoModelForCausalLM.from_pretrained(model_path)
tokenizer = AutoTokenizer.from_pretrained(model_path)

# Create a pipeline for text generation
pipe = pipeline(task="text-generation", model=model, tokenizer=tokenizer)

# Define a function to add CORS headers to responses
def add_cors_headers(response):
    response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    response.headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS'  # Add OPTIONS method
    return response

# Register the function as an "after_request" handler to apply CORS headers to all responses
app.after_request(add_cors_headers)

# Route to handle both POST and OPTIONS requests
@app.route('/get_questions', methods=['POST', 'OPTIONS'])
def get_questions_route():
    if request.method == 'OPTIONS':
        # Respond to preflight request
        return '', 204

    request_data = request.get_json()
    chief_complaint = request_data.get('chief_complaint')

    if chief_complaint:
        # Generate response for the chief complaint
        messages = [
            {"role": "user", "content": chief_complaint}
        ]
        prompt = pipe.tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
        outputs = pipe(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
        generated_text = outputs[0]["generated_text"].strip()
        print("GENERATED TEXT: ", generated_text)

        return jsonify({"response": generated_text})

    else:
        return jsonify({"response": "No chief complaint provided"})

if __name__ == '__main__':
    app.run(debug=True)
