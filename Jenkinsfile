pipeline {
     agent {
          docker {
               image 'node:alpine' 
               args '-p 33333:9000' 
          }
     }
     environment {
          HOME = '.'
     }
     stages {
          stage('Source') {
               steps {
                    git branch: 'main',
                        url: 'https://github.com/kornkritpawit/greetserver.git'
               }
          }
          stage('Build') {
               steps {
                    sh 'npm install'
               }
          }
          stage('Test') {
               steps {
                    echo 'testing...'
               }
          }
          stage('Deploy') {
               steps {
                    sh 'chmod +x ./jenkins/scripts/deliver.sh'
                    sh './jenkins/scripts/deliver.sh'
                    input message: 'Finished using the web site? (Click "Proceed" to continue)'
                    sh 'chmod +x ./jenkins/scripts/kill.sh'                    
                    sh './jenkins/scripts/kill.sh'

               }
          }
     }
}
