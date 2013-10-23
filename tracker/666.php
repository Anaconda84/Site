<?php 
echo "1111";
#$version = SQLite3::version();
if (class_exists('SQLite3'))
{
  print "OK!!!";
  $_GET['sqlite3_version'] = SQLite3::version();
  print $_GET['sqlite3_version']['versionString'];
}
else
{
  print "ERR !!!";
}
#print $version[0];
echo "2222";
?>