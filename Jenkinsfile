pipeline {
    agent any

    environment {
        MONGO_URI = "mongodb://admin:admin123@localhost:27017/yourDatabaseName?authSource=admin"
        NODE_HOME = '/home/rrm/.nvm/versions/node/v20.18.0'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
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
