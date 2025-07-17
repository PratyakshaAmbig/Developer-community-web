- When ever making the api call we must enable the {withCredentials:true} if it not not cookies are not stored.

# Deployment
- SignUp onAWS
- Launch instance
- chmod 400 <secret>.pem -> It store our secrete key
- Connect a machine using ssh command -> ssh -i "developerCommunity-secret.pem" ubuntu@ec2-65-0-170-122.ap-south-1.compute.amazonaws.com