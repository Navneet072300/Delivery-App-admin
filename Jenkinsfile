pipeline {
    agent {
        docker {
            image 'node:14' // Use the official Node.js Docker image with Node.js version 14
            args '-u root:root' // Run as root to avoid permission issues
        }
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Build Image') {
            steps {
                // Ensure Docker is installed and running on the Jenkins node
                sh 'docker build -t escanor007/my_store .'
            }
        }
    }
    post {
        success {
            echo 'Build successful! Your React app is ready for deployment.'
        }
        failure {
            echo 'Build failed! Check the Jenkins console output for details.'
        }
    }
}
