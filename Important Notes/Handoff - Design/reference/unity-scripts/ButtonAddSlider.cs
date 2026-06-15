using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class ButtonAddSlider : MonoBehaviour
{
    private string sliderName;
    public string GetSliderName() => sliderName;

    public void Initialize(string name)
    {
        sliderName = name;

        TMP_Text textComponent = GetComponentInChildren<TMP_Text>();
        if (textComponent != null)
        {
            textComponent.text = name;
        }
    }

    public void OnSliderAdded()
    {
        if (!string.IsNullOrEmpty(sliderName))
        {
            AppManager.Instance.InstantiateCommandSlider(sliderName);
            Destroy(gameObject); // Remove this button from "Add" list after use
        }
    }
}
