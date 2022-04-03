using UnityEngine;

[RequireComponent(typeof(CarController))]
public class CarUserControl : MonoBehaviour
{
    private CarController car;  // the car controller we want to use
    

    void Awake ()
    {
        // get the car controller
        car = GetComponent<CarController>();
    }


    void FixedUpdate()
    {
        // pass the input to the car!
#if CROSS_PLATFORM_INPUT
		float h = CrossPlatformInput.GetAxis("Horizontal");
		float v = CrossPlatformInput.GetAxis("Vertical");
#else
		float h = Input.GetAxis("Horizontal");
		float v = Input.GetAxis("Vertical");

		//przod/tyl
		//float v = Mathf.Round(-Input.acceleration.y);


		//lewo/prawo
		//float h = -Input.acceleration.x;

		//transform.Translate(Input.acceleration.x, 0, -Input.acceleration.z);



#endif
        car.Move(h,v);
    }
}
