import json
import pymysql.cursors

# Define a custom JSON encoder that converts Decimal types to a string representation
class CustomJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return str(obj)
        return super().default(obj)



# Database configuration
config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'db': 'store',
    'charset': 'utf8mb4',
    'cursorclass': pymysql.cursors.DictCursor
}

# Create a connection object
connection = pymysql.connect(**config)

# Create a Flask app object
app = Flask(__name__)
app.json_encoder = CustomJSONEncoder

# Define an endpoint to retrieve all data from a specific table
@app.route('/order_items')
def get_table_data():
    with connection.cursor() as cursor:
        # Execute the SQL query to retrieve all data from the table
        sql = "SELECT * FROM order_items"
        cursor.execute(sql)

        # Fetch all the rows of data
        data = cursor.fetchall()

        # Convert the data to a JSON format
        response = jsonify(data)

    # Return the JSON response
    return response

if __name__ == '__main__':
    app.run(debug=True, port=3333)

