containers=`docker ps|awk 'NR>1{print $1}'`

if [ -n "$containers" ] 
then 
    docker stop $containers
fi