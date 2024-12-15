pipeline {
    agent any

    environment {
        MONGO_URI = credentials('mongo_uri') // Use the correct credential ID here
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

        // Other stages...
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
