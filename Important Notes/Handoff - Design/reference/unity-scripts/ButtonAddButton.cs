using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class ButtonAddButton : MonoBehaviour
{
    private string buttonName;
    public string GetButtonName() => buttonName;

    public void Initialize(string name)
    {
        buttonName = name;

        TMP_Text textComponent = GetComponentInChildren<TMP_Text>();
        if (textComponent != null)
        {
            textComponent.text = name;
        }
    }

    public void OnButtonAdded()
    {
        if (!string.IsNullOrEmpty(buttonName))
        {
            AppManager.Instance.InstantiateCommandButton(buttonName);
            Destroy(gameObject); // Remove this button from "Add" list after use
        }
    }
}
