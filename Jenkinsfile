pipeline {
    agent any

    environment {
        MONGO_URI = "MONGO_URI=mongodb://admin:admin123@localhost:27017/yourDatabaseName?authSource=admin"
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
