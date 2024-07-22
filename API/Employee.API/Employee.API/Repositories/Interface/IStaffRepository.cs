using Employee.API.Model;

namespace Employee.API.Repositories.Interface
{
    public interface IStaffRepository
    {

        Task<IEnumerable<Staff>> GetAllAsync();
        Task<Staff> GetByIdAsync(int id);
        Task AddAsync(Staff employee);
        Task UpdateAsync(Staff employee);
        Task DeleteAsync(int id);
    }
}
