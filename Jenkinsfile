pipeline {
    agent any
    stages {
        stage("checkout"){
            steps{
                checkout scm
            }
        }
        stage("Install Dependencies") {
            steps {
                // Install Node.js and npm
                sh 'npm i'
            }
        }
        stage("Build") {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }
        stage("Build Image"){
            steps{
                sh 'docker build -t escanor007/my_store .'
            }
        }
    }

    post {
        success {
            // Notify success
            echo 'Build successful! Your React app is ready for deployment.'
        }
        failure {
            // Notify failure
            echo 'Build failed! Check the Jenkins console output for details.'
        }
    }
}
