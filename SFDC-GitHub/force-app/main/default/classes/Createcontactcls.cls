public class Createcontactcls 
{
    @Auraenabled
    Public static string createcontact(contact contobj)
    {
        system.debug('contact::'+contobj.FirstName);
        insert contobj;
        return contobj.id;
        
    }
}