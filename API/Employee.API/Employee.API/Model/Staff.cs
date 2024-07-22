using System.ComponentModel.DataAnnotations;

namespace Employee.API.Model
{
    public class Staff
    {
        [Key]
        public int GUIDId {get; set;}

        public string Name { get; set;}
        public string Description { get; set;}
        public string Phone { get; set;}
        public string Salary { get; set; }


    }
}
