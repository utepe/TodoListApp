using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoList.WebAPI.Models
{
    public class TodoItem
    {

        public string Id { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }

        public DateTime Updated { get; set; }
    }
}
