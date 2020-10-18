  <?php

  $dbconn = null;
  if(getenv('DATABASE_URL')){ // if using the heroku database
  	$connectionConfig = parse_url(getenv('DATABASE_URL'));
  	$host = $connectionConfig['host'];
  	$user = $connectionConfig['user'];
  	$password = $connectionConfig['pass'];
  	$port = $connectionConfig['port'];
  	$dbname = trim($connectionConfig['path'],'/');
  	$dbconn = pg_connect(
  		"host=".$host." ".
  		"user=".$user." ".
  		"password=".$password." ".
  		"port=".$port." ".
  		"dbname=".$dbname
  	);
  } else { // if using the local database, change the dbname to be whatever your local database's name is
  	$dbconn = pg_connect("host=localhost dbname=coloradoadventure");
  }
  class Attraction {
    public $id;
    public $name;
    public $city;
    public $cost;
    public $duration;
    public $activitylevel;

    public function __construct($id, $name, $city, $cost, $duration, $activitylevel){
      $this->id = $id;
      $this->name = $name;
      $this->city = $city;
      $this->cost = $cost;
      $this->duration = $duration;
      $this->activitylevel = $activitylevel;

    }
  }

  class Attractions {

    static function delete($id){
      $query = "DELETE FROM attractions WHERE id = $1";
      $query_params = array($id);
      pg_query_params($query, $query_params);
      return self::all();
    }

    static function update($updated_attraction){
      $query = "UPDATE attractions SET
        name = $1,
        city = $2,
        cost = $3,
        duration = $4,
        activitylevel = $5";
      $query_params = array(
        $updated_attraction->name,
        $updated_attraction->city,
        $updated_attraction->cost,
        $updated_attraction->duration,
        $updated_attraction->activitylevel,
      );
      pg_query_params($query, $query_params);
      return self::all();
    }

    static function create($attraction){
      $query = "INSERT INTO attractions (name, city, cost, duration, activitylevel) VALUES ($1, $2, $3, $4, $5)";
      pg_query_params($query, $query_params);
      return self::all();
    }

    static function all(){
      $attraction = array();

      $results = pg_query("SELECT * FROM attractions ORDER BY id ASC");
      $row_object = pg_fetch_object($results);

      while($row_object !== false){

        $new_attraction = new Attraction(
          intval($row_object->id),
          $row_object->name,
          $row_object->city,
          intval($row_object->cost),
          $row_object->duration,
          $row_object->activitylevel
        );

        $attractions[] = $new_attraction;

        $row_object = pg_fetch_object($results);
      }

      return $attractions;

    }
  }
  ?>
