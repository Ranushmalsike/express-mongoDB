pipeline {
    agent any

    environment {
        MONGO_URI = credentials('MongoDB') // Use Jenkins credentials store for Mongo URI
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Development Server') {
            steps {
                script {
                    sh 'npm run start:dev'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Add test command if you have any, or can leave it empty for now
                    sh 'echo "No tests specified"'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deployment steps go here (e.g., push to a remote server)
                    echo "Deployment steps go here"
                }
            }
        }
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
