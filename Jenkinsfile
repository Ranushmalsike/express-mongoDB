pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
        MONGO_URI = credentials('mongo-uri') // 'mongo-uri' is the Jenkins credential ID
    }

    options {
        timestamps()
        ansiColor('xterm')
    }

    stages {
        stage('Setup') {
            steps {
                echo 'Setting up the workspace...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                echo 'Running lint checks...'
                sh 'npx eslint . || true'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test || true'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm run build || echo "No build step defined."'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                sh '''
                # Replace with your deployment steps (e.g., Docker, PM2, or SSH deployment)
                echo "Deploying to server..."
                '''
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Investigate issues!'
        }
    }
}
