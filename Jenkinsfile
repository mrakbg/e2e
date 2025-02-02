pipeline {
    agent any
     tools {
       nodejs 'node18'  // Use the installed Node.js version
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/mrakbg/e2e.git'
            }
        }
        stage('Install Dependencies') {
            steps {
        sh 'npm install'
            }
        }
        // stage('Run App'){
        //     steps{
        //         withCredentials([
        //             string(credentialsId: 'DB_HOST', variable: 'DB_HOST'),
        //             string(credentialsId: 'DB_USER', variable: 'DB_USER'),
        //             string(credentialsId: 'DB_PASSWORD', variable: 'DB_PASSWORD'),
        //             string(credentialsId: 'DB_NAME', variable: 'DB_NAME')
        //         ]){
        //         sh "node app.js"
        //     }
                
        //     }
            
        // }
        
        
    }
}
