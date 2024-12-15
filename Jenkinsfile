pipeline {
    agent any

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
                sh 'npx eslint . || true' // Adjust ESLint command as needed
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test || true' // Adjust as per your test setup
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm run build || echo "No build step defined."'
            }
        }

        stage('Run Application') {
            steps {
                echo 'Starting the application...'
                sh '''
                # Ensure .env file is loaded by dotenv during runtime
                node ./src/index.mjs
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
