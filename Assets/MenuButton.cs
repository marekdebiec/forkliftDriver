using UnityEngine;  
using System.Collections;  
using UnityEngine.EventSystems;  
using UnityEngine.UI;

public class MenuButton : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler {
	
	public Text theText;
	
	public void OnPointerEnter(PointerEventData eventData)
	{
		theText.color = Color.green; //Or however you do your color
	}
	
	public void OnPointerExit(PointerEventData eventData)
	{

		theText.color = new Color32(255, 215, 92, 255);
	}
}