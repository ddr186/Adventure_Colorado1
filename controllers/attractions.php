  <?php
  header('Content-Type: applicaiton/json');

  include_once_ __DIR__ . '/../models/attraction/php';

  if($_REQUEST['action'] === 'index'){
    echo json_encode( Attractions::all() );

  } else if ($_REQUEST['action'] === 'create'){
    $request_body = file_get_contents('php://input');

    $body_object = json_decode($request_body);
    
    $new_attration = new Attraction(null, $body_object->name, $body_object->city, $body_object->cost, $body_object->duration, $body_object->activitylevel);

    $all_attractions = Attractions::create($new_attraction);

    echo json_encode($all_attractions);

  } else if ($_REQUEST['action'] === 'update'){
    $request_body = file_get_contents('php://input');

    $body_object = json_decode($request_body);

    $updated_attraction = new Attraction($_REQUEST['id'],
      $body_object->name,
      $body_object->city,
      $body_object->cost,
      $body_object->duration,
      $body_object->activitylevel);

    $all_attractions = Attractions::update($updated_attraction);
    echo json_encode($all_attractions);
  } else if ($_REQUEST['action'] === 'delete'){
    $all_attractions = Attraction::delete($_REQUEST['id']);
    echo json_encode($all_attractions);
  }
  ?>
