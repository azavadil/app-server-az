FROM    ubuntu:14.04

MAINTAINER Anthony Zavadil

RUN     sudo apt-get update

# Install node, npm, and git
RUN     sudo apt-get install -y nodejs npm git git-core


## we need to expose/map port 8080 between the container and the host.

# use the ADD instruction to copy a file called start.sh to /tmp/, make 
# start.sh executable, and then run it

ADD start.sh /tmp/

RUN chmod +x /tmp/start.sh

CMD ./tmp/start.sh