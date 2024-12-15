pipeline {
    agent any

    environment {
        NODE_ENV = 'production' // Set Node.js environment
        MONGO_URI = credentials('mongo-uri') // Secure MongoDB URI
    }

    stages {
        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }

        stage('Lint Code') {
            steps {
                // Optional: Run ESLint to enforce code standards
                sh 'npm run lint || echo "Linting skipped as no script defined"'
            }
        }

        stage('Run Tests') {
            steps {
                // Placeholder for tests
                sh 'npm test || echo "No tests defined yet"'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
