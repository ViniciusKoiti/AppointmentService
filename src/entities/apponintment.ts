import AppointmentProps from "./apponintmentProps";

class Appointment {

    private props: AppointmentProps

    get customer(): string {
        return this.props.customer;
    }

    get startsAt(): string {
        return this.props.customer;
    }

    get endsAt(): string {
        return this.props.customer;
    }

    constructor(props: AppointmentProps){
        const { startsAt, endsAt } = props;

        if (endsAt <= startsAt){
            throw new Error("Invalid end date")
        }

        this.props = props;
    }
}

export default Appointment;