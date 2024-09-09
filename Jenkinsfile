pipeline {
    agent any

    environment {
        DEPLOY_SERVER = "${env.TECHEER_LOG_IP}"
    }

    stages {
        stage('Checkout') {
            steps {
                cleanWs()
                git branch: 'DO/feat/#345', url: 'https://github.com/Techeer-log/Techeer-log.git'
            }
        }

        stage('Test') {
                    steps {
                        script {
                            sh "docker --version"
                            sh "docker compose --version"
                        }
                    }
                }

        stage('Get Commit Message') {
            steps {
                script {
                    def gitCommitMessage = sh(
                        script: "git log -1 --pretty=%B",
                        returnStdout: true
                    ).trim()
                    echo "Commit Message: ${gitCommitMessage}"
                    env.GIT_COMMIT_MESSAGE = gitCommitMessage
                }
            }
        }

        stage('Build & Image push') {
            steps {
                script {
                    sh """
                      chmod +x backend-build.sh
                      ./backend-build.sh
                    """


                }
            }
        }

        stage('Deploy') {
            when {
                anyOf {
                    branch 'main'
                    branch 'develop'
                }
//                 expression {
//                     def commitMessage = sh(script: "git log -1 --pretty=%B", returnStdout: true).trim()
//                     return commitMessage.contains("Merge")
//                 }
            }
            steps {
                script {
                    sshagent(['deploy-server-ssh']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no ${DEPLOY_SERVER}'
                        cd ~/Techeer-log
                        git pull
                        chmod +x deploy_to_ec2.sh
                        ./deploy_to_ec2.sh
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs(cleanWhenNotBuilt: false,
                    deleteDirs: true,
                    disableDeferredWipeout: true,
                    notFailBuild: true,
                    patterns: [[pattern: '.gitignore', type: 'INCLUDE'],
                               [pattern: '.propsfile', type: 'EXCLUDE']])
        }
        success {
            slackSend (
                message: "성공: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL}). 최근 커밋: '${env.GIT_COMMIT_MESSAGE}'",
            )
        }
        failure {
            slackSend (
                message: "실패: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL}). 최근 커밋: '${env.GIT_COMMIT_MESSAGE}'",
            )
        }
    }
}