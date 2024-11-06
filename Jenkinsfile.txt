pipeline {
    agent any

    environment {
        REPO_URL = 'httpsgithub.comProject-Horus-G9site_institucional.git'
        DEPLOY_PATH = '/var/www/html' 
        SERVER_USER = 'ubuntu' 
        SERVER_HOST = '18.212.95.38' 
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                git url: "${REPO_URL}", branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        sh 'npm run build'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['aws-ssh-key']) {
                    script {
                        try {
                            sh """
                                scp -o StrictHostKeyChecking=no -r * ${SERVER_USER}@${SERVER_HOST}:${DEPLOY_PATH}
                            """
                        } catch (Exception e) {
                            error("Deploy falhou.")
                        }
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline concluído com sucesso!'
        }
        failure {
            echo 'Falha na execução do pipeline.'
        }
        always {
            deleteDir()
        }
    }
}