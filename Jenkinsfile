pipeline {
    agent any

    environment {
        // Define environment variables here if needed
        // Example: NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
                git branch: 'main', url: 'https://github.com/Navneet072300/Delivery-App-admin.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the application
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the application
                // This could be a shell script or a deployment tool command
                sh 'npm run deploy'
            }
        }
    }

    post {
        success {
            echo 'Build and deployment succeeded!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}
