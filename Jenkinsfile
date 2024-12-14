pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
        MONGO_URI = 'mongodb+srv://admin:admin123@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority'
    }
    

        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests (add tests to your project if not present)
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                // Prepare for production if necessary
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the application
                echo 'Deploying the application...'
                sh 'pm2 restart src/index.mjs || pm2 start src/index.mjs'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
