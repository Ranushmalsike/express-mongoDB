pipeline {
    agent any

    environment {
        MONGO_URI = "mongodb://admin:admin123@localhost:27017/yourDatabaseName?authSource=admin"
    }

    stages {
        stage('Check Node and npm') {
            steps {
                script {
                    echo "Checking Node and npm versions"
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo "Installing dependencies"
                    sh 'npm install'
                }
            }
        }

        stage('Run Development Server') {
            steps {
                script {
                    echo "Running development server"
                    sh 'npm run start:dev'
                }
            }
        }

        // Other stages can be added here as needed
    }

    post {
        always {
            echo 'Cleaning up...'
        }
        success {
            echo 'Build completed successfully.'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
