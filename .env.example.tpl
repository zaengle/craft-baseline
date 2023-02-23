##
# CORE
##

# The application ID used to to uniquely store session and cache data, mutex locks, and more
CRAFT_APP_ID=<% project.handle %>-craft
# The environment Craft is currently running in (dev|staging|production)
CRAFT_ENVIRONMENT=dev
# The secure key Craft will use for hashing and encrypting data
CRAFT_SECURITY_KEY=<% project.securityKey %>
# The public URL of the main site
PRIMARY_SITE_URL=https://<% project.handle %>.ddev.site

##
# CRAFT CONFIG FLAGS
##
CRAFT_ALLOW_ADMIN_CHANGES=true
CRAFT_ALLOW_UPDATES=true
CRAFT_DEV_MODE=true
CRAFT_BACKUP_ON_UPDATE=false
CRAFT_ENABLE_TEMPLATE_CACHING=false
CRAFT_CACHE_DURATION=0
HARD_MODE=true

##
# DATABASE CONFIGURATION
##
CRAFT_DB_DRIVER=mysql
CRAFT_DB_SERVER=db
CRAFT_DB_PORT=3306
CRAFT_DB_DATABASE=db
CRAFT_DB_USER=db
CRAFT_DB_PASSWORD=db
CRAFT_DB_SCHEMA=
CRAFT_DB_TABLE_PREFIX=

##
# MAILER COMPONENT CONFIGURATION
##

MAIL_MAILER=smtp
MAIL_HOST=localhost
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null

##
# CRAFT PLUGIN CONFIG
##

# LABEL ENVIRONMENT
#CRAFT_ENVIRONMENT_LABEL_COLOR=green
CRAFT_ENVIRONMENT_LABEL_PREFIX=local

VITE_USE_DEV_SERVER=1
