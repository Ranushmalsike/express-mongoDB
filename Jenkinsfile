pipeline {
    agent any

    environment {
        MONGO_URI = "mongodb://admin:admin123@localhost:27017/yourDatabaseName?authSource=admin"
        PATH = "/usr/local/bin:$PATH"  // Ensure npm is available in the PATH
    }

    tools {
        nodejs 'NodeJS 14'  // Use NodeJS plugin if installed in Jenkins (configure in Jenkins' global tool config)
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Check Node and npm') {
            steps {
                script {
                    echo 'Checking Node and npm versions'
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }

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
